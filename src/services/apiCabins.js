import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if (error) {
    console.error(error);
    throw new Error("Error fetching cabins:")
  }

  return data;
} 

export async function deleteCabin(cabinId) {
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', cabinId)

  if (error) {
    console.error(error);
    throw new Error("Error deleting cabin:")
  }
}