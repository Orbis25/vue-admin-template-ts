<template>
  <v-content>
    <v-container>
      <v-row no-gutters justify="center">
        <v-col :cols="4">
          <v-row justify="center">
            <v-col cols="12">
              <v-icon style="font-size:300px" large color="green darken-2"
                >logo</v-icon
              >
            </v-col>
            <v-col cols="12">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="login.userName"
                  :counter="10"
                  :rules="userNameRules"
                  label="UserName"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="login.password"
                  :rules="passwordRules"
                  label="Password"
                  required
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Enter
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script lang="ts" src="./index"></script>
