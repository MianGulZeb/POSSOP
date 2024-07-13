import React, { useRef, useState, useEffect } from 'react';
import { RiFunctionAddFill } from 'react-icons/ri';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';


function Manager() {
  const [form, setForm] = useState({ site: '', username: '', password: '' });
  const [passwordArray, setPasswordArray] = useState([]);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    let password = localStorage.getItem('Password');
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const savePassword = () => {
    const newPasswordArray = [...passwordArray, form];
    setPasswordArray(newPasswordArray);
    localStorage.setItem('Password', JSON.stringify(newPasswordArray));
    setForm({ site: '', username: '', password: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    const newPasswordArray = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(newPasswordArray);
    localStorage.setItem('Password', JSON.stringify(newPasswordArray));
  };

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };
  return (
    <>
    <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to-right, #8080800a 1px, transparent 1px), linear-gradient(to-bottom, #8080800a 1px, transparent 1px)] bg-size-[14px_24px]'>
      <div className='absolute left-0 right-0 top-0 -z-0 m-auto h-[310px] w-[310px] rounded-md bg-green-300 opacity-20 blur-[100px]'></div>
    </div>
    <div className='bg-slate-200 mycontainer w-[96%] mx-10 rounded-md'>
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-700'> / &lt;</span>
        <span> Pass</span><span className='text-green-500'> OP /&gt;</span>
      </h1>
      <p className='text-green-600 text-lg text-center'>
        Your own password Manager
      </p>
      <div className='flex flex-col text-black gap-6 items-center'>
        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full w-[90%] py-1' type='text' name='site' id='' />
        <div className='flex w-full justify-between items-center gap-6'>
          <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full w-[50%] flex-1 py-1' type='text' name='username' id='' />
          <div className='relative'>
            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full s flex-1 py-1' type={showPass ? 'text' : 'password'} name='password' id='' />
            <span className='absolute right-[5px] top-[10px] cursor-pointer' onClick={togglePasswordVisibility}>
              {showPass ? <IoMdEyeOff className='p-1.15 w-[60%] font-bold' /> : <IoMdEye className='p-1.15 w-[60%] font-bold' />}
            </span>
          </div>
        </div>
        <button onClick={savePassword} className='flex justify-center items-center bg-green-500 hover:bg-green-700 py-3 px-4 rounded-full w-fit text-center'>
          <RiFunctionAddFill /> Add password
        </button>
      </div>
      <div className='password'>
        <h1 className='font-bold text-3xl py-4 mx-2'>Your passwords</h1>
        {passwordArray.length === 0 && <div>No password to Show</div>}
        {passwordArray.length !== 0 && (
          <table className='table-auto w-full rounded-md overflow-hidden'>
            <thead className='bg-green-600 text-white'>
              <tr>
                <th className='py-0.5'>buttons</th>
                <th className='py-1'>site</th>
                <th className='py-1'>Username</th>
                <th className='py-1'>password</th>
              </tr>
            </thead>
            <tbody className='bg-green-200'>
              {passwordArray.map((item, index) => (
                <tr key={index}>
                  <td className='py-1 border text-center'>
                    <button onClick={() => handleDelete(index)} className='bg-blue-600 text-white rounded-md px-3 py-2 my-4 ml-30'>delete</button>
                  </td>
                  <td className='py-1 border text-center'>
                    <a href={item.site} target='_blank' rel='noopener noreferrer'>{item.site}</a>
                  </td>
                  <td className='py-1 border text-center w-[350px]'>{item.username}</td>
                  <td className='py-1 border text-center w-[350px]'>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  </>
);
}
export default Manager;