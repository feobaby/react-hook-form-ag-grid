import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

export const EditForm = (props) => {
  const { currentUser, updateUser } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const initialFormState = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [props]);

  const onSubmit = () => {
    updateUser(user.id, user);
  };

  return (
    <form className="data-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          {...register('name', { maxLength: 20 })}
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <div style={{ color: 'red' }}>
          {errors.name?.type === 'maxLength' &&
            'Name is too long, choose a shorter one'}
        </div>
      </div>

      <div>
        <label>Username</label>
        <input
          {...register('username', { maxLength: 20 })}
          value={user.username}
          onChange={handleInputChange}
          required
        />
        <div style={{ color: 'red' }}>
          {errors.username?.type === 'maxLength' &&
            'Username is too long, choose a shorter one'}
        </div>
      </div>

      <div>
        <label>Email</label>
        <input
          {...register('email', {
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
          })}
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <div style={{ color: 'red' }}>
          {errors.email?.type === 'pattern' && 'Email address seems incorrect'}
        </div>
      </div>

      <div>
        <label>Phone</label>
        <input
          {...register('phone', {
            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
          })}
          value={user.phone}
          onChange={handleInputChange}
          required
        />
        <div style={{ color: 'red' }}>
          {errors.phone?.type === 'pattern' && 'Phone number seems incorrect'}
        </div>
      </div>

      <div>
        <label>Website</label>
        <input
          {...register('website')}
          value={user.website}
          onChange={handleInputChange}
          required
        />
      </div>

      <button className="button">Submit</button>
      <br />
    </form>
  );
};

export default EditForm;
