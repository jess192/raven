from dotenv import dotenv_values


def get_env(key: str, optional: bool = False) -> str:
    primary_env: dict = dotenv_values('.env')
    secondary_env: dict = dotenv_values('.env.defaults')

    if key in primary_env:
        return primary_env[key]
    elif key in secondary_env:
        return secondary_env[key]
    elif not optional:
        raise Exception(f'Update your .env file to include {key}')
