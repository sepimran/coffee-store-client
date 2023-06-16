import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEye ,faPencil} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffeecard = ({coffee ,coffees ,setCoffees  }) => {

    const {_id, name,quantity, photoUrl } = coffee;

    const deleteHandle = (id) =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                          )

                          const remainCoffees = coffees.filter(cof => cof._id !== _id);
                          setCoffees(remainCoffees);
                          
                    }else{
                        Swal.fire(
                            'Opp!',
                            'SomeThings is wrong',
                            'error'
                          )
                    }
                })
            }
          })
    }

    return (
        <div className='col-6'>
            <div className="card card-side bg-base-100 shadow-xl single-coffee-item">
                <figure><img src={photoUrl} alt="Movie"/></figure>
                <div className="card-body ">
                    <div className="single-coffee-content">
                        <ul>
                            <li><b>Name:</b>{name}</li>
                            <li><b>Quantity:</b>{quantity}</li>
                            <li><b>Price:</b> 120 taka</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-y-3">
                            <Link to={`/coffee/${_id}`}><button className="p-[5px] px-[10px] rounded-md bg-[#D2B48C] text-white"> <FontAwesomeIcon icon={faEye} />  </button></Link>
                            <Link to={`updatecoffee/${_id}`}>
                                <button className="p-[5px] px-[10px] rounded-md bg-[#3C393B] text-white"><FontAwesomeIcon icon={faPencil} /></button>
                            </Link>
                            <button onClick={() => deleteHandle(_id)} className="p-[5px] px-[10px] rounded-md bg-[#EA4744] text-white"><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Coffeecard;