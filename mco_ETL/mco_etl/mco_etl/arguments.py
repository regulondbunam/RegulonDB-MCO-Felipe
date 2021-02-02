import argparse


def load():
    """
    Description
        Define and load the arguments that will be used in the moc_ET.py program.

    Returns
        Arguments object.
    """
    parser = argparse.ArgumentParser(description="Extract and Transform data from .owl Ontology, and write data to JSON files",
                                     formatter_class=argparse.ArgumentDefaultsHelpFormatter
                                     )
    parser.add_argument("-i", "--inputfile",
                        help="Input Ontology file name",)
    parser.add_argument("-o", "--outputfile",
                        help="Output Ontology terms file name")
    parser.add_argument("-m", "--metadatafile",
                        help="Output Ontology metadata file name"
                        )
    parser.add_argument("-u", "--url",
                        help="Input Ontology source")
    parser.add_argument("-l", "--log",
                        help="Log file name")
    parser.add_argument("-s", "--schemaversion",
                        help="Schema Version")

    arguments = parser.parse_args()
    return arguments
