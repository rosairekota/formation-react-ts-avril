const contacts = [
  {
    _id: "607314fb5b9d393cffbbc1db",
    first_name: "Christian",
    last_name: "Lisangola Bondjali",
    phone_number: "+33840964176",
    email: "christian.lisangola@gmail.com",
    position: "Développeur Logiciel",
    work_address: "Blablabla",
  },
  {
    _id: "607cee57311fcb0015dd6e83",
    first_name: "Ryan",
    last_name: "Dahl",
    email: "ryan.dahl@gmail.com",
    phone_number: "+33477498476",
    position: "Software Engineer & Nodejs creator",
    work_address: "San Francisco",
  },
  {
    _id: "607ceec3311fcb0015dd6e84",
    first_name: "Rasmus",
    last_name: "Lerdof",
    email: "rasmus.lerdof@gmail.com",
    phone_number: "+33487498477",
    position: "Software Engineer",
    work_address: "Groenland",
  },
  {
    _id: "607cefbf311fcb0015dd6e85",
    first_name: "Brendan",
    last_name: "Eich",
    email: "bredan.eich@gmail.com",
    phone_number: "+33677654654",
    position: "Teacher and Software Engineer",
    work_address: "Illinois",
  },
  {
    _id: "607cf021311fcb0015dd6e86",
    first_name: "Tim",
    last_name: "Berners-Lee",
    email: "tim.berners@gmail.com",
    phone_number: "+243849987543",
    position: "Web Developer",
    work_address: "Zurich",
  },
  {
    _id: "607cf088311fcb0015dd6e87",
    first_name: "Bjarne",
    last_name: "Stroustrup",
    email: "bjarne.stroustrup@gmail.com",
    phone_number: "+243849887777",
    position: "Professor",
    work_address: "New Jersey",
  },
  {
    _id: "607cf0d7311fcb0015dd6e88",
    first_name: "Guido",
    last_name: "Van Rossum",
    email: "russo@gmail.com",
    phone_number: "+243814311147",
    position: "Software Engineer",
    work_address: "Amsterdam",
  },
  {
    _id: "607cf129311fcb0015dd6e89",
    first_name: "Yukihiro",
    last_name: "Matsumoto",
    email: "Matsumoto@gmail.com",
    phone_number: "+243811609403",
    position: "Teacher and Software Engineer",
    work_address: "Tokyo",
  },
  {
    _id: "607cf15e311fcb0015dd6e8a",
    first_name: "Douglas",
    last_name: "Crockford",
    email: "douglas@gmail.com",
    phone_number: "+243810492526",
    position: "Software Engineer",
    work_address: "California",
  },
  {
    _id: "607cf19e311fcb0015dd6e8b",
    first_name: "Linus",
    last_name: "Torvalds",
    email: "linux@gmail.com",
    phone_number: "+33878578477",
    position: "Software Engineer",
    work_address: "Helsinki",
  },
  {
    _id: "6084086cc404cd0015f21ea3",
    first_name: "Britanney dd",
    last_name: "Ramos",
    email: "katiger@mailinator.com",
    phone_number: "+243813153183",
    position: "Odio ut in aliquip f",
    work_address: "Ipsum sed dolorem m",
  },
];

const App = () => {
  const renderContacts = () => {
    return contacts.map((contact) => {
      return (
        <tr>
          <td>{contact.first_name}</td>
          <td>{contact.last_name}</td>
          <td>{contact.email}</td>
          <td>{contact.position}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Poste</th>
        </tr>
      </thead>
      <tbody>{renderContacts()}</tbody>
    </table>
  );
};

export default App;