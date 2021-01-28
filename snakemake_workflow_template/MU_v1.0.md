---
css: ../markdown.css
title: User Manual snakemake_workflow_template
---

# User Manual snakemake_workflow_template

## Introduction

The Snakemake script for the MCO data upload process was thought to make uploading data to RegulonDB Multigenomic faster and more controlled, due to the modular nature of Snakemake allows the upload process to be carried out from any computer that meets the execution requirements but without the need to configure its _Python_ environment for each of the data load modules.

## Snakefile run

To run the Snakefile script you must follow the following steps.

- Run the complete script:

```shell
$ snakemake -s mco_Snakefile --cores 1 --use-conda
```

The `-s` parameter is the name of the Snakefile script.
The option `--cores` indicates how many cores of the computer will be used to process the script, it is recommended to indicate them to avoid problems when executing.
The `--use-conda` option is used to indicate that the _conda_ environment is used to download the necessary modules and create sandboxes.

- Run the script as a test:

```shell
$ snakemake -s mco_Snakefile --cores 1 --use-conda -n
```

The `-n` parameter indicates that a clean test execution will be run showing the jobs to be executed or if there is a problem with the script.

- Execute only one rule:

```shell
$ snakemake -s mco_Snakefile --cores 1 --use-conda -R [my_rule]
```

The parameter `-R` indicates the name of the _rule_ that you want to execute, you can put several and they will be executed in the order given.

- Run the script forcibly:

```shell
$ snakemake -s mco_Snakefile --cores 1 --use-conda -f
```

The `-f` parameter is to perform a forced execution, in case the output files have already been generated to execute the script or a single rule.

- Run script and generate a report:

```shell
$ snakemake -s mco_Snakefile --cores 1 --use-conda -report
```

The `-report` parameter is used to generate a report, in html format, of the execution of the script with the memory data and the _log_ in general in a graphical presentation.

## ETL Module

If the module is executed with the Snakefile script, it needs external or local libraries, it is not necessary to install libraries on your computer directly, it will only be necessary to indicate in the file `envs/###_etl.yaml` the name and version of the library.

```yaml
channels:
  - bioconda
  - conda-forge
  - local #Local dependencies
dependencies:
  - [dependence name] #External dependencies
   - pip #Local dependencies
  - pip:
      - ../../release_modules/apis/local_dependence_name/
```

## Definitions, acronyms and abbreviations

**[Snakemake](https://snakemake.readthedocs.io/en/stable/)** - The Snakemake workflow management system is a tool to create reproducible and scalable data analyses. Workflows are described via a human readable, Python based language.

## Help and Support

If you have a problem or suggestion of any kind related to what is described in this manual, you can send an email to: [regusoft@ccg.unam.mx](mailto:regusoft@ccg.unam.mx)

The documents mentioned as reference in this manual may be requested through the aforementioned address.

## Bibliographic references

**Websites**
Website title: Snakemake
Web link: [https://snakemake.readthedocs.io/en/stable/](https://snakemake.readthedocs.io/en/stable/)

<!---
HISTORIAL DE REVISIONES

**Fecha:** 26/01/2021
**Versión:** 1.0
**Descripción:** Creación de manual de mantenimiento
**Realizado por: ** Felipe Betancourt Figueroa
**Estado:** Sin revisar

**Fecha:** [dd/mm/aaaa]
**Versión:** [#.#]
**Descripción:** [Indicar los cambios que se realizaron en el documento]
**Realizado por: ** [Nombre de la persona que realice los cambios]
**Estado:**[Revisión <Trabajado,  Verificado>, Estable **<**Vo.Bo, Validado>]
[Repetir esta sección por cada versión que se realice en el documento]
-->
