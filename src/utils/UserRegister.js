import supabase from "./supabase";


async function UserRegister({name, userName, password}) {
    const { data, error } = await supabase.from("users").insert([
        {
            name: name,
            user_name: userName,
            password: password
        }
    ]).select();
    return { data, error };
}


export default UserRegister