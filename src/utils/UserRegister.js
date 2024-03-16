import supabase from "./supabase";


async function UserRegister({email, password}) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      return { data, error };
}


export default UserRegister