import React, { memo } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, inverseIsFilter } from "./filterBarSlice";
import { StoreType } from "../app/store";

const FilterBar: React.FC = () => {
    const filter = useSelector<StoreType, string>(
        ({ filterBar }) => filterBar.filter
    );
    const dispatch = useDispatch();
    return (
        <Form className="filter">
            <Form.Group className="mb-3">
                <Form.Label htmlFor="exampleInputEmail1" className="form-label">
                    Фильтр
                </Form.Label>
                <Form.Control
                    value={filter}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(setFilter(e.target.value))
                    }
                    type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    onChange={() => dispatch(inverseIsFilter())}
                    label="Применить"
                />
            </Form.Group>
        </Form>
    );
};

export default memo(FilterBar);
