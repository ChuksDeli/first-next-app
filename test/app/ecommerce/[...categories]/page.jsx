export default function Page({ params }) {
  return <div>category page {decodeURI(params.categories)}</div>;
}
