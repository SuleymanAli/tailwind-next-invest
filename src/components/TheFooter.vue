<script setup>
import Twitter from "./Icons/Twitter.vue";
import Instagram from "./Icons/Instagram.vue";
import Facebook from "./Icons/Facebook.vue";
import Chevron from "./Icons/Chevron.vue";
</script>

<template>
  <footer class="bg-[#ECECEC]">
    <div class="container py-16">
      <div class="flex flex-wrap">
        <!-- Logo And Subscribe -->
        <div class="basis-4/12">
          <div>
            <span class="mb-7 block text-2xl font-bold">NEXT INVEST</span>
            <p class="text-grey text-[15px]">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
        </div>
        <!-- Nav: Servies -->
        <div class="ml-auto basis-3/12">
          <p class="mb-4 text-lg font-bold">Services</p>
          <nav class="text-grey list-none space-y-4">
            <li>
              <a href="#">Email Marketing</a>
            </li>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">Offline</a>
            </li>
          </nav>
        </div>
        <!-- Nav: About -->
        <div class="basis-3/12">
          <p class="mb-4 text-lg font-bold">About</p>
          <nav class="text-grey list-none space-y-4">
            <li>
              <a href="#"> Our Story </a>
            </li>
            <li>
              <a href="#"> Benefits </a>
            </li>
            <li>
              <a href="#"> Team </a>
            </li>
            <li>
              <a href="#"> Careers </a>
            </li>
          </nav>
        </div>
        <!-- Scroll To Top -->
        <div class="basis-1/12">
          <span class="flex h-12 w-12 rounded-full bg-primary">
            <i class="m-auto text-white">+</i>
          </span>
        </div>
        <!-- Footer: Bottom -->
        <div class="basis-4/12">
          <div>
            <p class="mb-4 text-2xl">Subscribe to our newsletter</p>
            <div class="flex h-12">
              <input
                type="text"
                placeholder="Email address"
                class="bg-transparent border-grey h-full grow border-b px-3 outline-none"
              />
              <button
                class="flex h-12 w-12 rounded-t-lg border-b border-secondary bg-secondary text-white"
              >
                <Chevron class="m-auto text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div class="ml-auto flex basis-2/12 flex-col">
          <nav class="mt-auto flex list-none justify-end space-x-10">
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
