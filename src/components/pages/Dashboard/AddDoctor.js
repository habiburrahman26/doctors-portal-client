import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const image_api_key = '15bc02e119ec92fb90e6ae29f375f2a3';

  const { data, isLoading } = useQuery('services', () => {
    return axios.get('http://localhost:5000/service');
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          //send to your request mongodb
          axios
            .post('http://localhost:5000/doctor', doctor, {
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            })
            .then(({ data }) => {
              if (data.insertedId) {
                toast.success('Doctor added successfully');
                reset();
              } else {
                toast.error('Failed to add doctor');
              }
            });
        }
      });
  };

  return (
    <div className="shadow-lg max-w-lg lg:w-96 p-8 mx-auto">
      <h1 className="text-3xl text-center mb-6">Add new doctor</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            className="input input-bordered w-full max-w-sm"
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className="label -mb-4">
            {errors.name?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input input-bordered w-full max-w-sm"
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: 'Enter valid email',
              },
            })}
          />
          <label className="label -mb-4">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register('specialty')}
            className="select select-bordered w-full max-w-xs"
          >
            {data?.data?.map((name) => (
              <option key={name._id}>{name.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            className="input input-bordered w-full max-w-sm"
            type="file"
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className="label -mb-4">
            {errors.name?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <button className="btn bg-accent text-white mt-4 w-full max-w-sm">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
