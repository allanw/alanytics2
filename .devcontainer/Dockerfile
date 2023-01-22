FROM meltano/meltano:v2.13.0-python3.10

RUN pip install duckdb

RUN meltano install extractors
RUN meltano install loaders
