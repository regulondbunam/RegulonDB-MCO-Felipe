---
css: ./markdown.css
title: User Manual MCO Web Service
---

# User Manual MCO Web Service

## Introduction

This web service will support MCO Browser, it will provide a connection with RegulonDB Multigenomic through queries with GraphQL.

## Ontology Metadata Querys

- Get all ontologies data:

```JavaScript
    getOntologies: () => OntologyController.getOntologies(),
```

This function returns an array of ontologies from the RegulonDB multigenomic ontologies collection.

- Get ontology data by ID:

```JavaScript
    getOntologyById: (_, { ontoCode }) => OntologyController.getOntologyById(ontoCode),
```

This function returns the specified ontology data.

## Terms Querys

- Get all terms:

```JavaScript
    getAllTerms: () => TermsController.getAllTerms(),
```

This function returns an array of all terms from the RegulonDB multigenomic terms collection.

- Get term by name:

```JavaScript
    getTermByName: (_, { termName }) => TermsController.getTermByName(termName),
```

This function allows to find a term by exactly name.

- Get term by ID:

```JavaScript
    getTermByID: (_, { termID }) => TermsController.getTermByID(termID),
```

This function allows to find a term by exactly ID, this can work to generate an interactive tree view.

- Get term children:

```JavaScript
    getTermChildren: (_, { termID }) => TermsController.getTermChildren(termID),
```

This returns a list of IDs from the _superClassOf_ slot of the term.

- Get term parents:

```JavaScript
    getTermParents: (_, { termID }) => TermsController.getTermParents(termID),
```

This returns a list of IDs from the _subClassOf_ slot of the term.

- Get term by text in the name:

```JavaScript
    getTermsByText: (_, { texto }) => TermsController.getTermsByText(texto),
```

This function allows to find a term by a word in the term name.

## Plugins and compatibility with other systems

This web service only needs to run a NodeJS environment, thi means that any computer that runs NodeJS can handle the service.

## Definitions, acronyms and abbreviations

**[NodeJS](https://nodejs.org/en/about/)** - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
**[GraphQL](https://graphql.org/)** - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
**[Apollo-Server](https://www.apollographql.com/docs/apollo-server/)** - Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with all Node.js HTTP server frameworks: Express, Connect, Hapi, Koa and Restify.
**[Apollo-Server-Express](https://www.apollographql.com/docs/apollo-server/v1/servers/express/)** - Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client.

## Help and Support

If you have a problem or suggestion of any kind related to what is described in this manual, you can send an email to: [regusoft@ccg.unam.mx](mailto:regusoft@ccg.unam.mx)

The documents mentioned as reference in this manual may be requested through the aforementioned address.

## Bibliographic references

**Websites**
Website title: Node.JS
Web link: [https://nodejs.org/en/about/](https://nodejs.org/en/about/)
Website title: GraphQL
Web link: [https://graphql.org/](https://graphql.org/)
Website title: Apollo-Server
Web link: [https://www.apollographql.com/docs/apollo-server/](https://www.apollographql.com/docs/apollo-server/)
Website title: Apollo-Server-Express
Web link: [https://www.apollographql.com/docs/apollo-server/v1/servers/express/](https://www.apollographql.com/docs/apollo-server/v1/servers/express/)

<!---
HISTORIAL DE REVISIONES

**Fecha:** [dd/mm/aaaa]
**Versión:** [##.#]
**Descripción:** [Indicar los cambios que se realizaron en el documento]
**Realizado por: ** [Nombre de la persona que realice los cambios]
**Estado:**[Revisión <Trabajado,  Verificado>, Estable **<**Vo.Bo, Validado>]
[Repetir esta sección por cada versión que se realice en el documento]
-->
