<script setup lang="ts">
  const whatsappNumber = '5521979383940'
  const whatsappMessage = encodeURIComponent('Olá, Gabriel. Gostaria de agendar uma consulta.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const email = 'gabrielcurileo@gmail.com'
  const phone = '(21) 9 7938-3940'
  const instagramUrl = 'https://www.instagram.com/psi.gabrielcuri'

  const landscapeImage = '/pra-quem.png'
  const heroImage = '/hero.png'
  const profileImage = '/perfil.jpeg'

  const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <UMain class="min-h-screen bg-[#f7f3ed] text-[#14283d]">
      <header
        class="sticky top-0 z-40 border-b border-[#ded6ca]/80 bg-[#f7f3ed]/95 backdrop-blur"
        data-aos="fade-down">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <button class="flex items-center gap-4" aria-label="Ir para o início" @click="y = 0">
            <div
              class="flex size-14 items-center justify-center rounded-full border border-[#d2c7b8] text-[#2f5e51]">
              <UIcon name="ph:plant" class="size-8" />
            </div>
            <div class="leading-tight">
              <p class="font-serif text-lg font-semibold tracking-wide text-[#111827] sm:text-xl">
                Gabriel Curi Leonardo
              </p>
              <p class="mt-1 text-xs font-semibold tracking-[0.18em] text-[#44515e] uppercase">
                Psicólogo clínico | CRP 05/84745
              </p>
            </div>
          </button>

          <UButton
            :to="whatsappUrl"
            target="_blank"
            color="neutral"
            size="xl"
            icon="ph:whatsapp-logo"
            class="hidden rounded-lg bg-[#4f8a72] px-7 py-4 text-sm font-semibold tracking-[0.14em] text-white uppercase shadow-sm ring-0 hover:bg-[#447864] sm:inline-flex">
            Agendar
          </UButton>
        </div>
      </header>

      <section id="inicio" class="relative overflow-hidden bg-[#f7f3ed]">
        <div class="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
          <img
            :src="heroImage"
            alt="Consultório com poltrona, plantas e luz natural"
            class="size-full object-contain object-right" />
          <div
            class="absolute inset-0 bg-linear-to-r from-[#f7f3ed] via-[#f7f3ed]/80 to-transparent" />
        </div>

        <div class="mx-auto grid min-h-190 max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
          <div class="relative max-w-2xl" data-aos="fade-up">
            <div class="mb-8 h-0.5 w-16 bg-[#b99d67]" />
            <h1 class="font-serif text-5xl leading-[1.05] text-[#10263c] sm:text-6xl lg:text-7xl">
              Um espaço de escuta para você ser
              <span class="block text-[#4f8a72]">quem é.</span>
            </h1>
            <p class="mt-8 max-w-xl text-3xl leading-tight text-[#14283d] sm:text-4xl">
              Psicoterapia online para adolescentes, adultos e idosos.
            </p>
            <UButton
              :to="whatsappUrl"
              target="_blank"
              color="neutral"
              size="xl"
              icon="ph:whatsapp-logo"
              class="mt-8 rounded-lg bg-[#4f8a72] px-7 py-4 text-sm font-semibold tracking-[0.14em] text-white uppercase shadow-sm ring-0 hover:bg-[#447864]">
              Agendar pelo WhatsApp
            </UButton>

            <div class="mt-12 grid max-w-2xl grid-cols-1 gap-6 text-[#111827] sm:grid-cols-3">
              <div class="flex items-center gap-3" data-aos="fade-up" data-aos-delay="100">
                <UIcon name="ph:lock-key" class="size-9 shrink-0" />
                <span class="text-sm leading-tight font-semibold">Sigilo<br />e privacidade</span>
              </div>
              <div class="flex items-center gap-3" data-aos="fade-up" data-aos-delay="180">
                <UIcon name="ph:monitor" class="size-9 shrink-0" />
                <span class="text-sm leading-tight font-semibold">Atendimento<br />online</span>
              </div>
              <div class="flex items-center gap-3" data-aos="fade-up" data-aos-delay="260">
                <UIcon name="ph:calendar-blank" class="size-9 shrink-0" />
                <span class="text-sm leading-tight font-semibold">Horários<br />flexíveis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fbf8f3] px-5 py-16 sm:px-8 lg:px-12">
        <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right">
            <h2 class="font-serif text-4xl text-[#111827]">Para quem é</h2>
            <div class="mt-4 h-0.5 w-14 bg-[#b99d67]" />
            <p class="mt-8 text-lg leading-8 text-[#111827]">
              Indicado para adolescentes, adultos e idosos que buscam compreender melhor a si
              mesmos, lidar com angústias, ansiedade, relações, lutos, questões existenciais e
              momentos de transição.
            </p>
            <p class="mt-7 text-lg leading-8 text-[#111827]">
              Se você sente que é hora de olhar para dentro e encontrar novos caminhos, esse espaço
              pode ser para você.
            </p>
          </div>

          <div class="overflow-hidden rounded-2xl shadow-sm" data-aos="fade-left">
            <img
              :src="landscapeImage"
              alt="Pessoa contemplando uma paisagem de montanhas"
              class="h-80 w-full object-cover object-[74%_14%]" />
          </div>
        </div>
      </section>

      <section class="bg-[#fbf8f3] px-5 py-16 sm:px-8 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="overflow-hidden rounded-2xl bg-[#d8d0c4]" data-aos="fade-right">
            <img
              :src="profileImage"
              alt="Foto de Gabriel Curi Leonardo"
              class="aspect-4/5 w-full object-cover" />
          </div>

          <div data-aos="fade-left">
            <h2 class="font-serif text-4xl text-[#111827]">Sobre mim</h2>
            <div class="mt-4 h-0.5 w-14 bg-[#b99d67]" />
            <div class="mt-7 space-y-6 text-xl leading-9 text-[#14283d]">
              <p>Sou Gabriel Curi Leonardo, psicólogo clínico (CRP 05/84745).</p>
              <p>
                Meu trabalho é oferecer um espaço de escuta onde sua experiência possa ser
                compreendida com seriedade, respeito e profundidade.
              </p>
              <p>
                Atuo a partir de uma perspectiva existencial-humanista, considerando cada pessoa em
                sua singularidade: sua história, seus conflitos e suas possibilidades.
              </p>
            </div>

            <div class="mt-10 grid gap-8 md:grid-cols-3">
              <article
                class="border-[#cbc4ba] md:border-r md:pr-8"
                data-aos="fade-up"
                data-aos-delay="100">
                <UIcon name="ph:graduation-cap" class="size-12 text-[#4f8a72]" />
                <h3 class="mt-5 font-serif text-2xl text-[#111827]">Graduação</h3>
                <p class="mt-3 leading-7">Psicólogo pela Universidade Veiga de Almeida (UVA)</p>
              </article>
              <article
                class="border-[#cbc4ba] md:border-r md:pr-8"
                data-aos="fade-up"
                data-aos-delay="180">
                <UIcon name="ph:certificate" class="size-12 text-[#4f8a72]" />
                <h3 class="mt-5 font-serif text-2xl text-[#111827]">Formação</h3>
                <p class="mt-3 leading-7">
                  Formado na Abordagem Centrada na Pessoa pelo Instituto ACP
                </p>
              </article>
              <article data-aos="fade-up" data-aos-delay="260">
                <UIcon name="ph:user-focus" class="size-12 text-[#4f8a72]" />
                <h3 class="mt-5 font-serif text-2xl text-[#111827]">Especialização</h3>
                <p class="mt-3 leading-7">
                  Residente do programa multiprofissional de atenção em oncologia.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#e4e8e1] px-5 py-16 sm:px-8 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="border-[#94a79b] lg:border-r lg:pr-12" data-aos="fade-up">
            <div class="flex items-center gap-6">
              <div
                class="flex size-24 shrink-0 items-center justify-center rounded-full border border-[#4f8a72] text-[#4f8a72]">
                <UIcon name="ph:person-simple-walk" class="size-12" />
              </div>
              <div>
                <h2 class="font-serif text-4xl text-[#111827]">Abordagem</h2>
                <div class="mt-4 h-0.5 w-14 bg-[#b99d67]" />
              </div>
            </div>
            <p class="mt-8 text-lg leading-8 text-[#111827]">
              Minha prática é fundamentada na abordagem existencial-humanista.
            </p>
            <p class="mt-8 text-lg leading-8 text-[#111827]">
              Essa perspectiva compreende o ser humano em sua totalidade, considerando suas
              vivências, escolhas, responsabilidades, angústias e possibilidades de transformação.
            </p>
            <p class="mt-8 text-lg leading-8 text-[#111827]">
              Acredita-se no potencial de cada pessoa para encontrar sentido e construir uma vida
              mais autêntica e significativa.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <div class="flex items-center gap-6">
              <div
                class="flex size-24 shrink-0 items-center justify-center rounded-full border border-[#4f8a72] text-[#4f8a72]">
                <UIcon name="ph:briefcase" class="size-12" />
              </div>
              <div>
                <h2 class="font-serif text-4xl text-[#111827]">Experiência:</h2>
                <div class="mt-4 h-0.5 w-14 bg-[#b99d67]" />
              </div>
            </div>
            <ul class="mt-8 space-y-6 text-lg leading-8 text-[#111827]">
              <li class="flex gap-4">
                <UIcon name="ph:check-circle" class="mt-1 size-7 shrink-0 text-[#4f8a72]" />
                <span
                  >Atendimento psicológico individual com adolescentes, adultos e idosos (4
                  anos)</span
                >
              </li>
              <li class="flex gap-4">
                <UIcon name="ph:check-circle" class="mt-1 size-7 shrink-0 text-[#4f8a72]" />
                <span>Atuação clínica online (1 ano e meio)</span>
              </li>
              <li class="flex gap-4">
                <UIcon name="ph:check-circle" class="mt-1 size-7 shrink-0 text-[#4f8a72]" />
                <span
                  >Atuo como psicólogo hospitalar residente no Instituto Nacional do Cancer
                  (INCA)</span
                >
              </li>
              <li class="flex gap-4">
                <UIcon name="ph:check-circle" class="mt-1 size-7 shrink-0 text-[#4f8a72]" />
                <span
                  >Trabalhei no campo da Saúde Mental pela Secretaria Municipal do Rio de Janeiro (1
                  ano)</span
                >
              </li>
              <li class="flex gap-4">
                <UIcon name="ph:check-circle" class="mt-1 size-7 shrink-0 text-[#4f8a72]" />
                <span
                  >Experiência em demandas como ansiedade, depressão, luto, autoestima,
                  relacionamentos, transições, estresse e busca por sentido</span
                >
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-[#173650] px-5 py-16 text-white sm:px-8 lg:px-12">
        <UIcon
          name="ph:plant"
          class="absolute top-8 -left-14 size-64 rotate-[-18deg] text-white/10"
          aria-hidden="true" />
        <div class="mx-auto max-w-5xl" data-aos="fade-up">
          <h2 class="text-center font-serif text-4xl">Informações importantes</h2>
          <div class="mx-auto mt-4 h-0.5 w-14 bg-[#b99d67]" />

          <div
            class="mt-8 grid overflow-hidden rounded-2xl bg-[#fbf8f3] text-[#14283d] shadow-sm md:grid-cols-2">
            <article class="flex gap-6 border-[#d5cec2] p-8 md:border-r">
              <div
                class="flex size-20 shrink-0 items-center justify-center rounded-full border border-[#d5cec2]">
                <UIcon name="ph:currency-dollar" class="size-10 text-[#64605c]" />
              </div>
              <div>
                <h3 class="font-serif text-3xl">Valor</h3>
                <p class="mt-3 leading-7">
                  O valor é definido em conjunto na primeira sessão, considerando suas demandas,
                  necessidades e particularidades.
                </p>
              </div>
            </article>
            <article class="flex gap-6 p-8">
              <div
                class="flex size-20 shrink-0 items-center justify-center rounded-full border border-[#d5cec2]">
                <UIcon name="ph:receipt" class="size-10 text-[#64605c]" />
              </div>
              <div>
                <h3 class="font-serif text-3xl">Reembolso</h3>
                <p class="mt-3 leading-7">
                  Atualmente, não trabalho com convênios, mas emito recibo para a solicitação de
                  reembolso junto ao seu plano de saúde.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#689382] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div
          class="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[auto_1fr_auto]"
          data-aos="fade-up">
          <div
            class="mx-auto flex size-28 items-center justify-center rounded-full bg-[#fbf8f3] text-[#4f8a72] md:mx-0">
            <UIcon name="ph:calendar-check" class="size-14" />
          </div>
          <div>
            <h2 class="text-center font-serif text-4xl md:text-left">Agendamento</h2>
            <div class="mx-auto mt-4 h-0.5 w-14 bg-[#d0ba7a] md:mx-0" />
            <p class="mt-6 max-w-md text-lg leading-8">
              O agendamento pode ser feito por WhatsApp, e-mail ou ligação, de forma rápida e
              prática.
            </p>
          </div>
          <UButton
            :to="whatsappUrl"
            target="_blank"
            color="neutral"
            size="xl"
            icon="ph:whatsapp-logo"
            class="rounded-lg bg-[#fbf8f3] px-8 py-5 text-sm font-semibold tracking-[0.16em] text-[#4f8a72] uppercase ring-0 hover:bg-white">
            Agendar agora
          </UButton>
        </div>

        <div
          class="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-center gap-5 text-white/95 sm:flex-row sm:gap-8">
          <a :href="`mailto:${email}`" class="flex items-center gap-3 hover:text-white">
            <UIcon name="ph:envelope-simple" class="size-7" />
            <span>{{ email }}</span>
          </a>
          <span class="hidden h-9 w-px bg-white/50 sm:block" />
          <a :href="`tel:+${whatsappNumber}`" class="flex items-center gap-3 hover:text-white">
            <UIcon name="ph:phone" class="size-7" />
            <span>{{ phone }}</span>
          </a>
        </div>
      </section>

      <section class="relative overflow-hidden bg-[#fbf8f3] px-5 py-16 sm:px-8 lg:px-12">
        <UIcon
          name="ph:plant"
          class="absolute right-12 bottom-0 size-48 rotate-45 text-[#b8b4aa]/45"
          aria-hidden="true" />
        <div class="mx-auto flex max-w-4xl items-center gap-8" data-aos="fade-up">
          <span class="font-serif text-8xl leading-none text-[#b8b4aa]">“</span>
          <figure>
            <blockquote class="font-serif text-3xl leading-tight text-[#173650] italic sm:text-4xl">
              O curioso paradoxo é que, quando me aceito como sou, então posso mudar.
            </blockquote>
            <figcaption
              class="mt-5 text-sm font-semibold tracking-[0.18em] text-[#111827] uppercase">
              Carl Rogers
            </figcaption>
          </figure>
        </div>
      </section>

      <footer class="bg-[#173650] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div class="flex items-center gap-4">
              <UIcon name="ph:plant" class="size-14" />
              <div>
                <p class="font-serif text-xl font-semibold">Gabriel Curi Leonardo</p>
                <p class="mt-1 text-sm tracking-[0.15em] uppercase">Psicólogo clínico</p>
                <p class="mt-2 text-sm">CRP 05/84745</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-sm font-semibold tracking-[0.14em] uppercase">Contato</h2>
            <div class="mt-5 space-y-3">
              <a
                :href="whatsappUrl"
                target="_blank"
                class="flex items-center gap-3 hover:text-white/80">
                <UIcon name="ph:whatsapp-logo" class="size-6" />
                <span>{{ phone }}</span>
              </a>
              <a :href="`mailto:${email}`" class="flex items-center gap-3 hover:text-white/80">
                <UIcon name="ph:envelope-simple" class="size-6" />
                <span>{{ email }}</span>
              </a>
              <p class="flex items-center gap-3">
                <UIcon name="ph:map-pin" class="size-6" />
                <span>Atendimento online - onde você estiver</span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-sm font-semibold tracking-[0.14em] uppercase">Redes sociais</h2>
            <a
              :href="instagramUrl"
              target="_blank"
              class="mt-5 flex items-center gap-3 hover:text-white/80">
              <UIcon name="ph:instagram-logo" class="size-7" />
              <span>psi.gabrielcuri</span>
            </a>
          </div>
        </div>
        <p class="mt-10 text-center text-sm text-white/80">
          © 2024 Gabriel Curi Leonardo - Psicólogo Clínico. Todos os direitos reservados.
        </p>
      </footer>
    </UMain>
  </UApp>
</template>
