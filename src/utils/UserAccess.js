import supabase from "./supabase";
async function UserAccess({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
}
export default UserAccess;
