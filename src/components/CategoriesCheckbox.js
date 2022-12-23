import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api/categoryApi'

const CategoriesCheckbox = ({handleCategory}) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        let item = e.target.value
        let new_checked = [...checked]
        let findItem = new_checked.findIndex(i=>i===item)
        if(findItem!=-1){
            new_checked.splice(findItem,1)
        }
        else{
            new_checked.push(item)
        }
        setChecked(new_checked)
        handleCategory(new_checked, 'category')
        // console.log(new_checked)
    }

    return (
        <>
            {
                categories.map(cat => {
                    return <div className="form-check" key={cat._id}>
                        <input className="form-check-input" type="checkbox" value={cat._id} id={`category${cat.category_name}`} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor={`category${cat.category_name}`}>
                            {cat.category_name}
                        </label>
                    </div>
                })
            }
        </>
    )
}

export default CategoriesCheckbox