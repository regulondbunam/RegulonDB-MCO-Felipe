import identifiers_api

from .identifier_object_builder import set_identifier_object


def handle_id(identifier_object, collection_registered_identifiers):
    # if the identifier already exists, we will updated its
    # lastRegulonDBVersionUsed field
    if identifier_object["_id"] in collection_registered_identifiers:
        object_id = collection_registered_identifiers[identifier_object["_id"]]
        last_regulondb_version_used = identifier_object["lastRegulonDBReleaseUsed"]
        identifiers_api.update_id(object_id, last_regulondb_version_used)
    # otherwise we create a new RegulonDB Identifier
    else:
        identifiers_api.create_id(identifier_object)


def manage_ids(jsons_data, **metadata_properties):
    """

    :param jsons_data:
    :param kwargs:
    :return:
    """

    organism = metadata_properties.get("organism", None)

    for dataset in jsons_data:
        collection_name = dataset.get("collectionName", None)
        collection_data = dataset.get("collectionData", None)
        ontology_name = dataset.get("ontologyName", None)

        metadata_properties["classAcronym"] = dataset.get("classAcronym", None)
        metadata_properties["subClassAcronym"] = dataset.get("subClassAcronym", None)
        metadata_properties["ontologyName"] = ontology_name

        # Trying to obtain identifiers from the collection that is been
        # processed, in order to check if the pre-identifier that is been
        # processed is going to be updated or created
        collection_identifiers = identifiers_api.regulondbmultigenomic.get_identifiers_by(type=collection_name, ontology_name=ontology_name, organism=organism)

        for json_object in collection_data:
            identifier_object = set_identifier_object(json_object, collection_name, **metadata_properties)
            handle_id(identifier_object, collection_identifiers)