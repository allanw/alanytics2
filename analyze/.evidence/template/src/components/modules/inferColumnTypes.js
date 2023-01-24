// To-do, replace with import from db-commons

var EvidenceType;
(function (EvidenceType) {
    EvidenceType["BOOLEAN"] = "boolean";
    EvidenceType["NUMBER"] = "number";
    EvidenceType["STRING"] = "string";
    EvidenceType["DATE"] = "date";
})(EvidenceType || (EvidenceType = {}));

var TypeFidelity;
(function (TypeFidelity) {
    TypeFidelity["INFERRED"] = "inferred";
    TypeFidelity["PRECISE"] = "precise";
})(TypeFidelity || (TypeFidelity = {}));


const inferValueType = function (columnValue) {
    if (typeof columnValue === 'number') {
        return EvidenceType.NUMBER;
    } else if (typeof columnValue === 'boolean') {
        return EvidenceType.BOOLEAN;
    } else if (typeof columnValue === 'string') {
        let result = EvidenceType.STRING;
        if(columnValue && columnValue.includes("-")){
            let testDateStr = columnValue;
            if(!columnValue.includes(":")){
                testDateStr = columnValue + "T00:00";
            }
            try {
                let testDate = new Date(testDateStr);
                if (testDate.toLocaleString().length > 0) {
                    let numCheck = Number.parseInt(testDate.toLocaleString().substring(0,1));
                    if(numCheck != null && !isNaN(numCheck)){
                        result = EvidenceType.DATE;
                    }
                }
            } catch (err) {
                //ignore
            }
        }
        return result;
    } else if (columnValue instanceof Date) {
        return EvidenceType.DATE;
    } else {
        return EvidenceType.STRING;
    }
}

export default function inferColumnTypes(rows) {
    if (rows && rows.length > 0) {
        let columns = Object.keys(rows[0]);
        let columnTypes = columns?.map(column => {
            let firstRowWithColumnValue = rows.find(element => element[column] == null ? false: true);
            if (firstRowWithColumnValue) {
                let inferredType = inferValueType(firstRowWithColumnValue[column]);
                return {'name':column, 'evidenceType':inferredType, 'typeFidelity':TypeFidelity.INFERRED};
            } else {
                return {'name':column, 'evidenceType':EvidenceType.STRING, 'typeFidelity':TypeFidelity.INFERRED};
            }
        });
        return columnTypes;
    }
    return undefined;
}