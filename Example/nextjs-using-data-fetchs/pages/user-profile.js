const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

export async function getServerSideProps(contex) {
  const { params, req, res } = contex;

  console.log(req);
  console.log(res);

  console.log('Server Side Code');
  
  return {
    props: {
      username: 'Shahryar',
    },
  };
}
