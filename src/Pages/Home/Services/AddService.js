import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useTitle from '../../../hooks/useTitle';

const AddService = () => {

    useTitle('Add Services')

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;



        const services = {
            name,
            price,
            description,
            image
        }

        fetch('https://service-review-server-rho.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added', {
                        position: 'top-center'
                    })
                    form.reset();
                }
            })
            .catch(err => console.error(err));



    }

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <h2 className='text-4xl text-purple-500 font-serif'>Add a Service</h2>
            <form onSubmit={handleAddService} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-purple-100">
                <fieldset className="gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Service Name" className="input input-bordered w-full" />
                        <input name="price" type="text" placeholder="Service Price" className="input input-bordered w-full " />
                        <input name="image" type="text" placeholder="ImageURL" className="input input-bordered w-full" />
                        <textarea name="description" type="text" className="textarea textarea-bordered p-10" placeholder="Service Description"></textarea>
                    </div>
                    <button className="btn mx-auto bg-purple-500 mt-5 w-1/4">Add Service</button>
                    <ToastContainer />
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;