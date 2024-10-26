
interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export const Input = ({ label, ...rest}: InputProps) => {
  return (
   <>
    <label htmlFor="">
      {label}
    </label>
    <input
      {...rest}
      className='w-full p-2 border border-gray-300 rounded-md'
    />
   </>
  );
}