<template>
  <div>
    <v-navigation-drawer v-model="drawer" :src="bg" dark app>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jhon Doe</v-list-item-title>
            <v-list-item-subtitle>Admin 🐱‍🏍</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.path" tag="div">
              <v-list-item-title> {{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#6c63ff" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>VueTS - DASHBOARD</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
