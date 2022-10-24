<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.key">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import { db, doc, query, collection, onSnapshot, deleteDoc } from '../firebaseDb';
    
    export default {
        data() {
            return {
                Users: []
            }
        },
        created() {
           
            const q = query(collection(db, "users_vue"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                this.Users =[];
                querySnapshot.forEach((doc) => {
                    this.Users.push({
                        key: doc.id,
                        name: doc.data().name,
                        email: doc.data().email,
                        phone: doc.data().phone
                    })
                });
            });
            
        },
        methods: {
            
            deleteUser(id){

                if (window.confirm("Do you really want to delete?")) {

                    deleteDoc(doc(db, "users_vue", id))
                        .then(() => {
                            console.log("User was deleted");
                        })
                        .catch((e) => {
                            console.log(e);
                        });                
                }
            }  
        }
    }
</script>
<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>