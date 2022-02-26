<script lang="ts">
import MyAccountsComponent from "@/components/main-bar/MyAccountsComponent.vue";

export default {
  data() {
    return {
      openMenu: false,
      openSubmenu: false,
    };
  },

  props: {
    firstName: String,
    lastName: String,
    workStatus: String,
  },

  components: { MyAccountsComponent },
};
</script>

<template>
  <div class="profile-dropdown-component__container">
    <div class="profile-dropdown-component__container-icon">
      <img
        class="profile-dropdown-component__container-icon-image"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ba/ba6b4f6f9758a6778c643c22b21cae7b4dcb2143.jpg"
        alt="avatar"
      />
      <span
        v-if="workStatus === 'online'"
        class="profile-dropdown-component__container-icon-status"
        style="background-color: #5ebea3"
      ></span>
      <span
        v-if="workStatus === 'offline'"
        class="profile-dropdown-component__container-icon-status"
        style="background-color: #e21515"
      ></span>
      <span
        v-if="workStatus === 'paused'"
        class="profile-dropdown-component__container-icon-status"
        style="background-color: #e2d415"
      ></span>
    </div>
    <div
      class="profile-dropdown-component__container-name cursor-pointer"
      @click="openMenu = !openMenu"
    >
      {{ firstName + " " + lastName }}
      <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </svg>
    </div>
    <Transition name="fade">
      <div class="profile-dropdown-component__menu" v-if="openMenu">
        <ul class="profile-dropdown-component__menu-list">
          <li class="profile-dropdown-component__menu-list-item">
            <div class="cursor-pointer" @click="openSubmenu = !openSubmenu">
              <div class="absolute left-0 pl-4">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              Mis cuentas
            </div>
          </li>
          <li class="profile-dropdown-component__menu-list-item">
            <router-link to="/">Vista empleado</router-link>
          </li>
          <li class="profile-dropdown-component__menu-list-item">
            <router-link to="/">Mi perfil</router-link>
          </li>
          <li class="profile-dropdown-component__menu-list-item">
            <router-link to="/">Cerrar sesión</router-link>
          </li>
        </ul>
        <Transition name="fade">
          <div
            class="profile-dropdown-component__submenu"
            v-if="openMenu && openSubmenu"
          >
            <ul class="profile-dropdown-component__submenu-list">
              <MyAccountsComponent
                title="Sesame1"
                :firstname="firstName"
                :lastname="lastName"
              />
              <MyAccountsComponent
                title="Sesame2"
                :firstname="firstName"
                :lastname="lastName"
              />
            </ul>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.profile-dropdown-component {
  @apply flex;
  &__container {
    @apply flex items-center;

    &-icon {
      @apply relative inline-block flex items-center;

      &-image {
        @apply inline object-cover w-8 h-8 rounded-full;
      }

      &-status {
        margin-right: -0.25rem;
        @apply absolute right-0 inline-block w-3 h-3 rounded-full;
      }
    }

    &-name {
      color: #3f3f3f;
      @apply font-bold pl-6 text-xl flex items-center;
    }
  }

  &__menu {
    margin-top: 4.5rem;
    @apply absolute w-72 bg-white rounded-2xl shadow-lg translate-y-1/2 -translate-x-1/3;

    &-list {
      &-item {
        color: #5d5d5d;
        @apply h-16 flex justify-center items-center text-center;

        &:not(:first-child) {
          border-top: 2px solid #f4f4f4;
        }

        &:hover {
          background-color: #d8f2ec;
        }
      }
    }
  }

  &__submenu {
    transform: translateX(-103%);
    @apply absolute top-0 w-72 bg-white rounded-2xl shadow-lg;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
