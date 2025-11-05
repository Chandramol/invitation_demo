<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800">
    <div v-if="guest" class="flex flex-col items-center px-4 py-8 space-y-6">
      <!-- 💍 Header -->
      <h1 class="text-3xl md:text-5xl font-bold text-pink-700 text-center animate-bounce">
        💍 Annapoorna & Chandramol 💖
      </h1>

      <!-- 🎞️ Wedding video -->
      <div class="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
        <iframe
          class="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/vJ9uB5JWiEI?autoplay=1&mute=1&loop=1&playlist=vJ9uB5JWiEI"
          title="Wedding Video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <!-- 💌 Invitation card -->
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 max-w-md text-center border border-pink-100">
        <h2 class="text-2xl font-semibold text-pink-700 mb-2">
          Welcome, {{ guest.name }} 🌸
        </h2>
        <p class="text-gray-600 mb-3 italic">Dear {{ guest.relation || "Guest" }},</p>
        <p class="text-gray-700 mb-2">
          You are warmly invited to celebrate the union of
          <span class="font-semibold text-pink-600">Annapoorna 💍 Chandramol</span>.
        </p>
        <div class="mt-4 space-y-2 text-gray-700">
          <p><strong>Date:</strong> 25th December 2025</p>
          <p><strong>Venue:</strong> Grand Palace, Chennai</p>
        </div>
      </div>

      <!-- 💐 Extra info cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
        <div class="bg-white rounded-xl p-4 shadow-md hover:scale-105 transition-transform">
          <h4 class="font-semibold text-pink-700 mb-2">🎶 Music & Dance</h4>
          <p class="text-gray-600 text-sm">
            Enjoy live performances and dance the night away!
          </p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-md hover:scale-105 transition-transform">
          <h4 class="font-semibold text-pink-700 mb-2">🍽️ Dinner & Celebration</h4>
          <p class="text-gray-600 text-sm">
            Delicious buffet with regional delicacies awaits you.
          </p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-md hover:scale-105 transition-transform">
          <h4 class="font-semibold text-pink-700 mb-2">📍 Location</h4>
          <p class="text-gray-600 text-sm">
            Grand Palace Banquet Hall, Anna Nagar, Chennai
          </p>
        </div>
      </div>
    </div>

    <!-- ❌ Invalid Guest -->
    <div v-else class="flex flex-col items-center justify-center h-screen text-center text-gray-700">
      <h2 class="text-3xl font-semibold text-rose-600">Invalid Invitation 😔</h2>
      <p class="mt-2 text-gray-500">Please check your QR link or contact the host.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const guest = ref(null);

onMounted(async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const data = await fetch("/guestData.json").then((r) => r.json());
  guest.value = data.find((g) => g.id === id);
});
</script>

<style>
/* Optional: add a smooth fade-in animation */
body {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
