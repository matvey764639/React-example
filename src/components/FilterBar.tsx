import React from "react";
import Form from "react-bootstrap/Form";
import { filterBarStore } from "./FilterBarStore";
import { observer } from "mobx-react-lite";

const FilterBar: React.FC = observer(() => {
    return (
        <Form className="filter">
            <Form.Group className="mb-3">
                <Form.Label htmlFor="exampleInputEmail1" className="form-label">
                    Фильтр
                </Form.Label>
                <Form.Control
                    value={filterBarStore.filter}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        filterBarStore.setFilter(e.target.value)
                    }
                    type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    onChange={() => filterBarStore.toggleFilter()}
                    label="Применить"
                />
            </Form.Group>
        </Form>
    );
});

export default FilterBar;
