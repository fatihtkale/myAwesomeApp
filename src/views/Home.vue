<script setup lang="ts">
import { ref, toRaw } from "nativescript-vue";

const selected = ref(0);

const navigate = (selectedIndex: number) => {
  if (selected.value === selectedIndex) return;
  selected.value = selectedIndex;
};
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="*,auto">
      <StackLayout row="0">
        <Label :text="selected"></Label>
      </StackLayout>
      <FlexboxLayout
        row="1"
        flexDirection="row"
        justifyContent="space-around"
        class="py-3 bg-green-500">
        <StackLayout col="0">
          <FlexboxLayout
            @tap="navigate(0)"
            :class="selected == 0 ? 'bg-green-300 rounded-full px-4' : ''"
            class="flex items-center justify-center py-2 transition-all ease-in-out delay-150">
            <Image col="0" width="30" src="~/assets/task.png"></Image>
            <Label
              v-if="selected === 0"
              class="text-green-600 ml-1 font-bold text-[15px]"
              col="1"
              text="Opgaver"></Label>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout col="1">
          <FlexboxLayout
            @tap="navigate(1)"
            :class="selected == 1 ? 'bg-green-300 rounded-full px-4' : ''"
            class="flex items-center justify-center py-2 transition-all ease-in-out delay-150">
            <Image col="0" width="30" src="~/assets/time.png"></Image>
            <Label
              v-if="selected === 1"
              class="text-green-600 ml-1 font-bold text-[15px]"
              col="1"
              text="Tidsregistrering"></Label>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout col="2">
          <FlexboxLayout
            @tap="navigate(2)"
            :class="selected == 2 ? 'bg-green-300 rounded-full px-4' : ''"
            class="flex items-center justify-center py-2 transition-all ease-in-out delay-150">
            <Image col="0" width="30" src="~/assets/settings.png"></Image>
            <Label
              v-if="selected === 2"
              class="text-green-600 ml-1 font-bold text-[15px]"
              col="1"
              text="Indstillinger"></Label>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout col="3">
          <FlexboxLayout
            @tap="navigate(3)"
            :class="selected == 3 ? 'bg-green-300 rounded-full px-4' : ''"
            class="flex items-center justify-center py-2 transition-all ease-in-out delay-150">
            <Image col="0" width="30" src="~/assets/messages.png"></Image>
            <Label
              v-if="selected === 3"
              class="text-green-600 ml-1 font-bold text-[15px]"
              col="1"
              text="Beskeder"></Label>
          </FlexboxLayout>
        </StackLayout>
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>

<style></style>
