import Playerpage from "./playerpage";

export default async function Home({
  params,
}: {
  params: Promise<{ hostid: string }>
}) {
  const resolvedParams = await params;
  console.log('id found  ',resolvedParams.hostid)
 
  return (
   <>
    <Playerpage hostid={resolvedParams.hostid}></Playerpage>
   </>
  );

}