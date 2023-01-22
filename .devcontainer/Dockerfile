FROM meltano/meltano:v2.13.0-python3.10

WORKDIR /home/

COPY . .

RUN pip install duckdb

ENV MELTANO_SYS_DIR_ROOT="/home/.meltano"

RUN meltano install extractors
RUN meltano install loaders
