import React from 'react'
import './PublicationDateFilter.scss'

const PublicationDateFilter = () => {
    return (
        <div className="filter-type form-section">
            <select name="publication-date" id="publication-date">
            <option selected="selected" value="last 48 hours">
            last 48 hours
            </option>
            <option value="last week">last week</option>
            <option value="last month">last month</option>
            </select>
        </div>
        );
}

export default PublicationDateFilter
