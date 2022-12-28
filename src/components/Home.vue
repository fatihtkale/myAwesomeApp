<script lang="ts" setup></script>

<template>
  <Frame>
    <Page actionBarHidden="true" class="bg-white">
      <ScrollView>
        <StackLayout>
          <GridLayout rows="* auto auto 100">
            <Image
              class="w-full"
              stretch="aspectFill"
              rowSpan="4"
              src="~/assets/Path_1.png"
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
          
          <ScrollView>
          <Label
            class="font-bold text-lg mx-4 mb-2 text-gray-300"
            text="Email"
          ></Label>
          <TextField
            class="py-4 text-black px-4 mx-4 bg-gray-100 border-none rounded-md"
          />
        </ScrollView>

          <Label
            class="font-bold text-lg mx-4 mb-2 text-gray-300 mt-3"
            text="Email"
          ></Label>
          <TextField
            secure="true"
            class="py-4 text-black px-4 mx-4 bg-gray-100 border-none rounded-md"
          />

          <!-- Everything else inside the scroll view -->
          <Button
            class="my-4 px-4 py-2 dark:text-black bg-white border-2 border-blue-400 rounded-lg"
          >
            View Details
          </Button>
          <GridLayout columns="* auto *">
            <StackLayout class="bg-gray-300 h-1 mx-4"></StackLayout>
            <StackLayout class="bg-gray-300 h-1 mx-4" col="2"></StackLayout>

            <Label col="1" text="Eller" class="mx-4 text-gray-400"></Label>
          </GridLayout>
          <Button
            class="my-4 px-4 py-2 dark:text-black bg-white border-2 border-blue-400 rounded-lg"
          >
            View Details
          </Button>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame>
</template>
