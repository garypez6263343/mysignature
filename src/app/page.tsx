import Template01 from '@/templates/Template01';

export default function Home() {
  const fakeData = {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Senior Product Manager',
    company: 'Acme Corp',
    email: 'john.doe@acme.com',
    phone: '+1 415 555 0199',
    website: 'https://acme.com',
    photoURL: 'https://i.pravatar.cc/80?u=john',
    linkedInURL: 'https://linkedin.com/in/johndoe',
    twitterURL: 'https://twitter.com/johndoe',
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Preview Signature</h2>
      <Template01 {...fakeData} />
    </div>
  );
}
