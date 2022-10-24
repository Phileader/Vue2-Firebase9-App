<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add User</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group" style="padding-top: 20px;">
                    <button class="btn btn-primary btn-block">Add User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import { db, collection, addDoc } from '../firebaseDb';
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            async onFormSubmit(event) {
                event.preventDefault()
                await addDoc(collection(db, "users_vue"), {
                    name: this.user.name,
                    email: this.user.email,
                    phone: this.user.phone
                })
                .then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.phone = ''
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>