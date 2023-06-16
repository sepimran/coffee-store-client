import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const navigate = useNavigate();

    const coffee = useLoaderData();
    const {_id, name,quantity, photoUrl ,category,details,supplier,taste } = coffee;

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const updatedCoffee = {name , quantity, supplier , taste ,category ,details ,photoUrl};

        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee item has been Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/');
                }else{
                    Swal.fire({
                        title: 'Opps!',
                        text: 'Coffee item has been Updated',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }

                
            })


    }


    return (
        <div>
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-wrapper">
                                <h2>Update Coffee</h2>
                                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                                <form onSubmit={handleAddCoffee}>
                                    <div className="form-area row">
                                        <div className="single-form-item col-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name='name' defaultValue={name} placeholder='Enter coffee name' required />
                                        </div>
                                        <div className="single-form-item col-6">
                                            <label htmlFor="quantity">Available Quantity</label>
                                            <input type="number"  name='quantity' defaultValue={quantity} placeholder='Enter coffee quantity' required />
                                        </div>
                                        <div className="single-form-item col-6">
                                            <label htmlFor="supplier">Supplier</label>
                                            <input type="text" name='supplier' defaultValue={supplier} placeholder='Enter coffee supplier' required />
                                        </div>
                                        <div className="single-form-item col-6">
                                            <label htmlFor="taste">Taste</label>
                                            <input type="text" name='taste' defaultValue={taste} placeholder='Enter coffee taste' required />
                                        </div>
                                        <div className="single-form-item col-6">
                                            <label htmlFor="category">Category</label>
                                            <input type="text" name='category' defaultValue={category} placeholder='Enter coffee category' required />
                                        </div>
                                        <div className="single-form-item col-6">
                                            <label htmlFor="details">Details</label>
                                            <input type="text" name='details' defaultValue={details} placeholder='Enter coffee details' required />
                                        </div>
                                        <div className="single-form-item col-12">
                                            <label htmlFor="photoUrl">Photo</label>
                                            <input type="text" name='photoUrl' defaultValue={photoUrl} placeholder='Enter photo URL' required />
                                        </div>
                                        <div className="single-form-item col-12">
                                           
                                            <input type="submit" name='submit' value="Add Coffee" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateCoffee;