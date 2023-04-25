import ProfileCard from './compnents/ProfileCard';
import './App.css';

function App() {
  const users = [
    {
      imageSrc: "https://i.imgur.com/MK3eW3As.jpg",
      designation: 'Software Engineer',
      name: 'Munawar Farooqui',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://i.imgur.com/MK3eW3As.jpg',
      designation: 'Product Manager',
      name: 'Rahul Sharma',
      jobDescription: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageSrc: 'https://i.imgur.com/MK3eW3As.jpg',
      designation: 'Marketing Manager',
      name: 'Pankaj tripathi',
      jobDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  return (
    <div className="App">
      {users.map(user => (
        <ProfileCard
          key={user.name}
          imageSrc={user.imageSrc}
          designation={user.designation}
          name={user.name}
          jobDescription={user.jobDescription}
        />
      ))}
    </div>
  );
}

export default App;
