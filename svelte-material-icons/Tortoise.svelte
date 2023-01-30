<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19.31,5.6C18.09,5.56 16.88,6.5 16.5,8C16,10 16,10 15,11C13,13 10,14 4,15C3,15.16 2.5,15.5 2,16C4,16 6,16 4.5,17.5L3,19H6L8,17C10,18 11.33,18 13.33,17L14,19H17L16,16C16,16 17,12 18,11C19,10 19,11 20,11C21,11 22,10 22,8.5C22,8 22,7 20.5,6C20.15,5.76 19.74,5.62 19.31,5.6M9,6A6,6 0 0,0 3,12C3,12.6 3.13,13.08 3.23,13.6C9.15,12.62 12.29,11.59 13.93,9.94L14.43,9.44C13.44,7.34 11.32,6 9,6Z" fill="{color}"/></svg>