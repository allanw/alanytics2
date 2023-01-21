FROM meltano/meltano:v2.13.0-python3.10

RUN pip install duckd

RUN meltano install extractors
RUN meltano install loaders
