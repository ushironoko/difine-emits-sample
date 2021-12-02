<script setup lang="ts">
type Props = {
  foo: string;
  bar: string;
}

withDefaults(defineProps<Props>(), {
  foo: 'foo',
  bar: 'bar',
});

const emit = defineEmits<{
  (event: 'focus', payload: Event): void;
  (event: 'blur', payload: Event): void;
  (event: 'click', payload: Event): void;
}>();

const handleFocus = (event: Event): void => {
  emit('focus', event);
};

const handleClick = (event: Event): void => {
  emit('click', event);
};

const handleBlur = (event: Event): void => {
  emit('blur', event);
};
</script>

<template>
  <div>
    <input type="text" v-model="foo" @focus="handleFocus" @blur="handleBlur" />
    <button @click="handleClick">{{ bar }}</button>
  </div>
</template>
