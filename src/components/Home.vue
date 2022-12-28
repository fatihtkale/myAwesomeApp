<script lang="ts" setup>
</script>

<template>
  <Frame>
    <Page class="bg-white" actionBarHidden="true">
      <ScrollView>
        <StackLayout>
          <GridLayout rows="* auto auto 100">
            <Image
              rowSpan="4"
              src="~/assets/Path 1.png"
              stretch="aspectFill"
              class="w-full"
            />

            <Label
              row="1"
              verticalAlignment="bottom"
              text="Velkommen Tilbage!"
              class="text-3xl text-white px-12"
            ></Label>
            <Label
              row="2"
              verticalAlignment="top"
              text="pil ved mig moussa"
              class="text-lg text-white px-12"
            ></Label>
          </GridLayout>

          <!-- Everything else inside the scroll view -->
          <Button
            class="my-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
            horizontalAlignment="center"
          >
            View Details
          </Button>
          <GridLayout columns="* auto *">
            <StackLayout height="2" class="bg-gray-300 mx-4"></StackLayout>
            <StackLayout
              height="2"
              class="bg-gray-300 mx-4"
              col="2"
            ></StackLayout>

            <Label col="1" text="Eller" class="mx-4"></Label>
          </GridLayout>
          <Button
            class="my-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
            horizontalAlignment="center"
          >
            View Details
          </Button>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
