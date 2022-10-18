import React, { FC } from "react"
import Form from "react-bootstrap/Form"

interface FilterBarProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    change: () => void
}

const FilterBar: FC<FilterBarProps> = ({ onChange, value, change }) => (
    <Form className="filter">
        <Form.Group className="mb-3">
            <Form.Label htmlFor="exampleInputEmail1" className="form-label">
                Фильтр
            </Form.Label>
            <Form.Control value={value} onChange={onChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" onChange={change} label="Применить" />
        </Form.Group>
    </Form>
)

export default FilterBar
