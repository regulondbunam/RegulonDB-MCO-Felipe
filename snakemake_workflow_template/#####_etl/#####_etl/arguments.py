#!/usr/bin/python
# -*- coding: UTF-8 -*-

import argparse


def load():
    """
    Description


    Returns
        Arguments object.
    """
    parser = argparse.ArgumentParser(description="Program description",
                                     formatter_class=argparse.ArgumentDefaultsHelpFormatter
                                     )
    parser.add_argument("-t", "--template",  # -t is the short argument alias --template is the long argument alias
                        help="Argument description/help",)

    arguments = parser.parse_args()
    return arguments
