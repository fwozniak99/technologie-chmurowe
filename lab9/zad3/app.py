import platform

def get_system():
    system = platform.system()
    if system == 'Linux':
        print('Witaj na Linuxie!')
    elif system == 'Windows':
        print('Witaj na Windowsie!')
    else:
        print('Witaj na innym systemie operacyjnym!')

if __name__ == '__main__':
	get_system()
