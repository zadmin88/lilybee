const CollectionName = ({ params }: { params: { collectionName: string } }) => {
  const { collectionName } = params;
  return <div>{collectionName}</div>;
};

export default CollectionName;
