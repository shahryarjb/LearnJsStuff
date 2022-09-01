function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(contex) {
  const { params } = contex;
  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
