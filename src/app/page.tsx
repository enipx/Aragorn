import { Dashboard } from "@/components/dashboard";
import Eye from "../../eyeofsauron";

const getActivities = async (dataKey = "Cw2c8OBrRqveocAbJRQ2W42aarc1wxE2iWAZknGbW9w=") => {
  try {
    if (!process.env.GANDALF_PRIVATE_KEY) {
      throw new Error('Missing GANDALF_PRIVATE_KEY');
    }

    if (!dataKey) {
      throw new Error('Missing dataKey');
    }

    const eye = new Eye({privateKey: process.env.GANDALF_PRIVATE_KEY as string});
    const data = await eye.getActivity({
      dataKey,
      source: "YOUTUBE" as any,
      limit: 10,
      page: 1
    });

    return data;
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }

}

export default async function Home({ searchParams }: { searchParams: any}) {
  const key = searchParams['dataKey'];
  const activities = key ? await getActivities(key) : undefined;

  return (
    <Dashboard activities={activities} isDemo={!key} />
  );
}
