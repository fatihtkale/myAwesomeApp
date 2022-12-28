<script lang="ts" setup></script>

<template>
  <Frame>
    <Page actionBarHidden="true">
      <ScrollView>
        <StackLayout>
          <GridLayout rows="* auto auto 100">
            <Image
              class="w-full"
              stretch="aspectFill"
              rowSpan="4"
              iosOverflowSafeArea="true"
              src="~/assets/Path_1.png"
            />

            <Label
              row="1"
              verticalAlignment="bottom"
              text="Velkommen Tilbage!"
              class="text-3xl text-white px-5"
            ></Label>
            <Label
              row="2"
              verticalAlignment="top"
              text="pil ved mig moussa"
              class="text-lg text-white px-5"
            ></Label>
          </GridLayout>

            <GridLayout class="mb-4" rows="auto auto auto auto">
              <Label
                class="font-bold text-lg mx-4 mb-2 dark:text-gray-300 text-gray-600"
                text="Email"
                row="0"
              ></Label>
              <TextField
                row="1"
                class="py-4 text-black px-4 mx-4 bg-gray-100 border-none rounded-md dark:bg-gray-900 dark:text-white"
              />

              <Label
                class="font-bold text-lg mx-4 mb-2 dark:text-gray-300 text-gray-600 mt-3"
                text="Kodeord"
                row="2"
              ></Label>
              <TextField
                row="3"
                secure="true"
                class="py-4 text-black px-4 mx-4 bg-gray-100 border-none rounded-md dark:bg-gray-900 dark:text-white"
              />
            </GridLayout>

          <!-- Everything else inside the scroll view -->
          <Button
            class="py-4 mx-4 d bg-blue-500 text-white rounded-lg"
          >
            Log ind
          </Button>
          <GridLayout class="py-3" columns="* auto *">
            <StackLayout class="bg-gray-300 h-[5px] mx-4"></StackLayout>
            <StackLayout class="bg-gray-300 h-[5px] mx-4" col="2"></StackLayout>

            <Label col="1" text="Eller" class="mx-4 text-gray-400"></Label>
          </GridLayout>
          <Button
            class="py-4 mx-4 bg-transparent dark:text-gray-300 border-4 text-gray-500 border-gray-500 rounded-lg"
          >
            Register
          </Button>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame>
</template>

<style>
Button {
  android-elevation: 0;
  android-dynamic-elevation-offset: 0;
}
</style>
