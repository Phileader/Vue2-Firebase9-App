<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="updateUser">
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
                    <button class="btn btn-primary btn-block">Update User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import { db, doc, getDoc, setDoc } from '../firebaseDb';
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        created() {
            this.getUser(this.$route.params.id);
        },
        methods: {
            async getUser(idDoc)
            {
                const docRef = doc(db, "users_vue", idDoc);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.user = docSnap.data();
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }
            },
            async updateUser(event)
            {
                event.preventDefault();
                await setDoc(doc(db, "users_vue", this.$route.params.id), {
                    name: this.user.name,
                    email: this.user.email,
                    phone: this.user.phone
                })
                .then(() => {
                    console.log("User successfully updated!");
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>