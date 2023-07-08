import {useForm} from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection} from 'firebase/firestore' //you need both of these, define the collection you want to add a document for
import {auth, db} from '../../config/firebase' //import the db we defined in config
import { useAuthState } from 'react-firebase-hooks/auth'

interface CreateFormData { //necessary because data will require us to define a type (because of typescript)
    title: string,
    description: string
}

export const CreateForm = () => {
    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description")
    })


    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({ //registers the components of the form that are going to be referenced in the schema
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => { //data wordt automatisch meegegeven
        await addDoc(postsRef, {
          /*  title: data.title,
            description: data.description, */
            ...data, //zelfde als hierboven, maar korter. 2 lijnen hieronder moeten wel gedefinieerd worden omdat ze niet standaard erbij horen
            username: user?.displayName,
            id: user?.uid
        })
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")}/>
            <p>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    </div>
    )
}