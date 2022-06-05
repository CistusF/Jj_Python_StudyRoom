a = 1
def A():
    global a
    if a != 10:
        a += 1
    return 'Python'