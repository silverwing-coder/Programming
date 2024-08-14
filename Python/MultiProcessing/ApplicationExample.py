import time
import concurrent.futures
from PIL import Image, ImageFilter

img_names = [
    'photo-1.jpg',
    'photo-2.jpg',
    'photo-3.jpg',
    'photo-4.jpg',
    'photo-5.jpg',
    'photo-6.jpg',
    'photo-7.jpg',
    'photo-8.jpg',
    'photo-9.jpg',
    'photo-10.jpg',
    'photo-11.jpg',
    'photo-12.jpg',
    'photo-13.jpg',
    'photo-14.jpg',
    'photo-15.jpg'
]

t1 = time.perf_counter()

size = (1200, 1200)

def process_image(img_name):
    img = Image.open(img_name)

    img = img.filter(ImageFilter.GaussianBlur(15))

    img.thumbnail(size)
    img.save(f'processed/{img_name}')
    print(f'{img_name} was processed...')

if __name__ == '__main__':
    with concurrent.futures.ProcessPoolExecutor() as executor:
        executor.map(process_image, img_names)

    t2 = time.perf_counter()

    print(f'Finished in {t2-t1} seconds')